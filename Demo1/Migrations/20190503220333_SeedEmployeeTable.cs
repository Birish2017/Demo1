using Microsoft.EntityFrameworkCore.Migrations;

namespace Demo1.Migrations
{
    public partial class SeedEmployeeTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "employees",
                columns: new[] { "Id", "Departmemnt", "Email", "EmployeeType", "Name", "Salary" },
                values: new object[] { 1, "IT", "mark@gmaill.com", 1, "Mark", 6000 });

            migrationBuilder.InsertData(
                table: "employees",
                columns: new[] { "Id", "Departmemnt", "Email", "EmployeeType", "Name", "Salary" },
                values: new object[] { 2, "HR", "mary@gmaill.com", 2, "Mary", 5000 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
