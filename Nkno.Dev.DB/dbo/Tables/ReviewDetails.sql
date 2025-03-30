CREATE TABLE [dbo].[ReviewDetails] (
    [Id]                INT             IDENTITY (1, 1) NOT NULL,
    [Comments]          NVARCHAR (3000) NULL,
    [Rating5]           FLOAT (53)      NULL,
    [RatingThumbUpDown] INT             NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

