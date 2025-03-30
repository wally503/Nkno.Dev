CREATE TABLE [dbo].[RoastersShops] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [Name]      NVARCHAR (100) NOT NULL,
    [CountryId] INT            NULL,
    [City]      NVARCHAR (100) NULL,
    [Website]   NVARCHAR (200) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([CountryId]) REFERENCES [dbo].[Countries] ([Id])
);

