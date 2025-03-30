CREATE TABLE [dbo].[Reviews] (
    [Id]             INT IDENTITY (1, 1) NOT NULL,
    [UserId]         INT NULL,
    [CoffeeId]       INT NULL,
    [ReviewDetailId] INT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([CoffeeId]) REFERENCES [dbo].[Coffees] ([Id]),
    FOREIGN KEY ([ReviewDetailId]) REFERENCES [dbo].[ReviewDetails] ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id])
);

