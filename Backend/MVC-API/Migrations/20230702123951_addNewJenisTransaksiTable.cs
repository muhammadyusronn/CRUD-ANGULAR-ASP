using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MVC_API.Migrations
{
    /// <inheritdoc />
    public partial class addNewJenisTransaksiTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "kode_transaksi",
                table: "JenisTransaksi",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Transaksi",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    tanggal_transaksi = table.Column<DateTime>(type: "datetime2", nullable: false),
                    kode_transaksi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nominal_transaksi = table.Column<long>(type: "bigint", nullable: false),
                    created_by = table.Column<long>(type: "bigint", nullable: false),
                    updated_by = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transaksi", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "TransaksiTabungan",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    tanggal_transaksi = table.Column<DateTime>(type: "datetime2", nullable: false),
                    nominal_transaksi = table.Column<long>(type: "bigint", nullable: false),
                    created_by = table.Column<long>(type: "bigint", nullable: false),
                    updated_by = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransaksiTabungan", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    nama = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    username = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JenisTransaksi_kode_transaksi",
                table: "JenisTransaksi",
                column: "kode_transaksi",
                unique: true,
                filter: "[kode_transaksi] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_User_username",
                table: "User",
                column: "username",
                unique: true,
                filter: "[username] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transaksi");

            migrationBuilder.DropTable(
                name: "TransaksiTabungan");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropIndex(
                name: "IX_JenisTransaksi_kode_transaksi",
                table: "JenisTransaksi");

            migrationBuilder.DropColumn(
                name: "kode_transaksi",
                table: "JenisTransaksi");
        }
    }
}
