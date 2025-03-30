CREATE TABLE [dbo].[RoastersShops] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [Name]      NVARCHAR (100) NULL,
    [CountryId] INT            NULL,
    [CityName]  NVARCHAR (100) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([CountryId]) REFERENCES [dbo].[Countries] ([Id])
);

