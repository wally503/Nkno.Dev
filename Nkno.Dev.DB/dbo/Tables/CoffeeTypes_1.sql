CREATE TABLE [dbo].[CoffeeTypes] (
    [Id]             INT           IDENTITY (1, 1) NOT NULL,
    [CoffeeTypeName] NVARCHAR (75) NOT NULL,
    [BrewTypeId]     INT           NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([BrewTypeId]) REFERENCES [dbo].[BrewTypes] ([Id])
);

