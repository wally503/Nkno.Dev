CREATE TABLE [dbo].[Reviews] (
    [Id]              INT             IDENTITY (1, 1) NOT NULL,
    [UserId]          INT             NULL,
    [RoasterId]       INT             NULL,
    [OriginCountryId] INT             NULL,
    [BeanDrinkName]   NVARCHAR (100)  NULL,
    [FlavourNotes]    NVARCHAR (200)  NULL,
    [Review]          NVARCHAR (3000) NULL,
    [Roast]           NVARCHAR (40)   NULL,
    [Presentation]    NVARCHAR (100)  NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([OriginCountryId]) REFERENCES [dbo].[Countries] ([Id]),
    FOREIGN KEY ([RoasterId]) REFERENCES [dbo].[RoastersShops] ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id])
);



