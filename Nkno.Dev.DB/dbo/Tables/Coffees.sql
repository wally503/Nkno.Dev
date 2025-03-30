CREATE TABLE [dbo].[Coffees] (
    [Id]              INT            IDENTITY (1, 1) NOT NULL,
    [UserId]          INT            NOT NULL,
    [RoasterId]       INT            NOT NULL,
    [OriginCountryId] INT            NOT NULL,
    [CoffeeTypeId]    INT            NOT NULL,
    [RoastId]         INT            NULL,
    [FlavourNotes]    NVARCHAR (200) NULL,
    [IsDrink]         INT            NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([CoffeeTypeId]) REFERENCES [dbo].[CoffeeTypes] ([Id]),
    FOREIGN KEY ([OriginCountryId]) REFERENCES [dbo].[Countries] ([Id]),
    FOREIGN KEY ([RoasterId]) REFERENCES [dbo].[RoastersShops] ([Id]),
    FOREIGN KEY ([RoastId]) REFERENCES [dbo].[RoastTypes] ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id])
);

