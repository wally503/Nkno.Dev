﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Nkno.Dev.Server.Models.DbModels;

public partial class Review
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? CoffeeId { get; set; }

    public int? ReviewDetailId { get; set; }

    public virtual Coffee Coffee { get; set; }

    public virtual ReviewDetail ReviewDetail { get; set; }

    public virtual User User { get; set; }
}