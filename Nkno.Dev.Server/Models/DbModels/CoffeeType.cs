﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Nkno.Dev.Server.Models.DbModels;

public partial class CoffeeType
{
    public int Id { get; set; }

    public string CoffeeTypeName { get; set; }

    public int? BrewTypeId { get; set; }

    public virtual BrewType BrewType { get; set; }

    public virtual ICollection<Coffee> Coffees { get; set; } = new List<Coffee>();
}