
using API.Entities;
using API.Services;
using API.Services.Books;
using API.Services.InserData;
using API.Services.Students;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

var myAllowspecificOrigins = "_myAllowspecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("Defaultconnection"));

});
builder.Services.AddAutoMapper(typeof(Program)); 
builder.Services.AddControllersWithViews();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowspecificOrigins, builder =>
    {
        builder.WithOrigins("http://localhost:4200")
        .AllowAnyMethod().
        AllowAnyHeader();
    });
});
 builder.Services.AddScoped<DataServices>();
  builder.Services.AddScoped<BookServices>();
    builder.Services.AddScoped<StudenService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(myAllowspecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
