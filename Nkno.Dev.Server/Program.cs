using Microsoft.EntityFrameworkCore;
using Nkno.Dev.Server.Data;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Sources;
using Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Secret Value Services
ConfigurationBuilder configurationBuilder = new ConfigurationBuilder();
IConfiguration configuration = configurationBuilder.AddUserSecrets<Program>().Build();
string? localSqlConnectionString = configuration.GetValue<string>("LocalSql");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DI Hookups for IoC
// Data Sources (Database Contexts)
if (localSqlConnectionString != null)
{
    builder.Services.AddDbContextFactory<FFXIVLocalSqlDbContext>(
        options => options.UseSqlServer(localSqlConnectionString)
        );

    //builder.Services.AddDbContext<FFXIVLocalSqlDbContext>(){ };
}
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

// Data Source (Controller Contexts)
builder.Services.AddTransient<IFFXIVDataSource, LocalSqlFFXIVDataSource>();


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
