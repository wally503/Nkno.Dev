using Microsoft.EntityFrameworkCore;
using Nkno.Dev.Server.Data;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Sources;
using System.Reflection;
using Nkno.Dev.Server.Settings;

var builder = WebApplication.CreateBuilder(args);

// Secret Value Services
ConfigurationBuilder configurationBuilder = new ConfigurationBuilder();
IConfiguration configuration = configurationBuilder.AddUserSecrets<Program>().Build();
string? localSqlConnectionString = configuration.GetValue<string>("LocalSql");



// DI Hookups for IoC -- hooking up based on Debug/Release -- Release is hosted, Debug is local.
var buildConfiguration = typeof(Program).Assembly.GetCustomAttribute<AssemblyConfigurationAttribute>()?.Configuration;
if (buildConfiguration == "Debug")
{
    //Local SQL DI
    Console.WriteLine("Running in debug");
    builder.Services.AddDbContextFactory<LocalSqlDbContext>(
        options => options.UseSqlServer(localSqlConnectionString)
    );
    builder.Services.AddDatabaseDeveloperPageExceptionFilter();
    builder.Services.AddTransient<IFFXIVDataService, LocalSqlFFXIVDataService>();

    //Local MongoDB DI
    var mongoDbSettings = builder.Configuration.GetSection("MongoDbSettings").Get<MongoDbSettings>();
    builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection("MongoDbSettings"));
    builder.Services.AddDbContext<LocalMongoDbContext>(options =>
        options.UseMongoDB(mongoDbSettings?.ConnectionString ?? "", mongoDbSettings?.DatabaseName ?? "")
    );
    builder.Services.AddScoped<IGameHistoryDataService, LocalGameHistoryDataService>();
}
else 
{
    Console.WriteLine($"Running in {buildConfiguration}");
    throw new NotImplementedException("Add your release DI");
}

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
