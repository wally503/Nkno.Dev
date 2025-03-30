@echo off
@echo This cmd file creates a Data API Builder configuration based on the chosen database objects.
@echo To run the cmd, create an .env file with the following contents:
@echo dab-connection-string=your connection string
@echo ** Make sure to exclude the .env file from source control **
@echo **
dotnet tool install -g Microsoft.DataApiBuilder
dab init -c dab-config.json --database-type mssql --connection-string "@env('dab-connection-string')" --host-mode Development
@echo Adding tables
dab add "BrewType" --source "[dbo].[BrewType]" --fields.include "Id,Name" --permissions "anonymous:*" 
dab add "Coffee" --source "[dbo].[Coffees]" --fields.include "Id,UserId,RoasterId,OriginCountryId,CoffeeTypeId,RoastId,FlavourNotes,IsDrink" --permissions "anonymous:*" 
dab add "CoffeeType" --source "[dbo].[CoffeeType]" --fields.include "Id,CoffeeTypeName,BrewTypeId" --permissions "anonymous:*" 
dab add "Country" --source "[dbo].[Countries]" --fields.include "Id,Name" --permissions "anonymous:*" 
dab add "ReviewDetail" --source "[dbo].[ReviewDetails]" --fields.include "Id,Comments,Rating5,RatingThumbUpDown" --permissions "anonymous:*" 
dab add "Review" --source "[dbo].[Reviews]" --fields.include "Id,UserId,CoffeeId,ReviewDetailId" --permissions "anonymous:*" 
dab add "RoastersShop" --source "[dbo].[RoastersShops]" --fields.include "Id,Name,CountryId,City,Website" --permissions "anonymous:*" 
dab add "RoastType" --source "[dbo].[RoastType]" --fields.include "Id,Name" --permissions "anonymous:*" 
dab add "User" --source "[dbo].[Users]" --fields.include "Id,Username,Name,Location" --permissions "anonymous:*" 
@echo Adding views and tables without primary key
@echo Adding relationships
dab update Coffee --relationship CoffeeType --target.entity CoffeeType --cardinality one
dab update CoffeeType --relationship Coffee --target.entity Coffee --cardinality many
dab update Coffee --relationship Country --target.entity Country --cardinality one
dab update Country --relationship Coffee --target.entity Coffee --cardinality many
dab update Coffee --relationship RoastersShop --target.entity RoastersShop --cardinality one
dab update RoastersShop --relationship Coffee --target.entity Coffee --cardinality many
dab update Coffee --relationship RoastType --target.entity RoastType --cardinality one
dab update RoastType --relationship Coffee --target.entity Coffee --cardinality many
dab update Coffee --relationship User --target.entity User --cardinality one
dab update User --relationship Coffee --target.entity Coffee --cardinality many
dab update CoffeeType --relationship BrewType --target.entity BrewType --cardinality one
dab update BrewType --relationship CoffeeType --target.entity CoffeeType --cardinality many
dab update Review --relationship Coffee --target.entity Coffee --cardinality one
dab update Coffee --relationship Review --target.entity Review --cardinality many
dab update Review --relationship ReviewDetail --target.entity ReviewDetail --cardinality one
dab update ReviewDetail --relationship Review --target.entity Review --cardinality many
dab update Review --relationship User --target.entity User --cardinality one
dab update User --relationship Review --target.entity Review --cardinality many
dab update RoastersShop --relationship Country --target.entity Country --cardinality one
dab update Country --relationship RoastersShop --target.entity RoastersShop --cardinality many
@echo Adding stored procedures
@echo **
@echo ** run 'dab validate' to validate your configuration **
@echo ** run 'dab start' to start the development API host **
