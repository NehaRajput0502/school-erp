var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(); // <-- this is important
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // <-- this is also important
app.UseSwagger();
app.UseSwaggerUI();

app.Run();
