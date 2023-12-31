﻿// <auto-generated />
using System;
using MVC_API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MVC_API.Migrations
{
    [DbContext(typeof(FullstackDbContext))]
    partial class FullstackDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("MVC_API.Models.Employee", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("departement")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("phone")
                        .HasColumnType("bigint");

                    b.Property<long>("salary")
                        .HasColumnType("bigint");

                    b.HasKey("id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("MVC_API.Models.JenisTransaksi", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("kode_transaksi")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("nama")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipe")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("kode_transaksi")
                        .IsUnique()
                        .HasFilter("[kode_transaksi] IS NOT NULL");

                    b.ToTable("JenisTransaksi");
                });

            modelBuilder.Entity("MVC_API.Models.Transaksi", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("created_by")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("kode_transaksi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("nominal_transaksi")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("tanggal_transaksi")
                        .HasColumnType("datetime2");

                    b.Property<string>("updated_by")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Transaksi");
                });

            modelBuilder.Entity("MVC_API.Models.TransaksiTabungan", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<long>("created_by")
                        .HasColumnType("bigint");

                    b.Property<long>("nominal_transaksi")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("tanggal_transaksi")
                        .HasColumnType("datetime2");

                    b.Property<long>("updated_by")
                        .HasColumnType("bigint");

                    b.HasKey("id");

                    b.ToTable("TransaksiTabungan");
                });

            modelBuilder.Entity("MVC_API.Models.User", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("nama")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("id");

                    b.HasIndex("username")
                        .IsUnique()
                        .HasFilter("[username] IS NOT NULL");

                    b.ToTable("User");
                });
#pragma warning restore 612, 618
        }
    }
}
