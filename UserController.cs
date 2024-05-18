using FlameKicks.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FlameKicks.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly DBService _dbService;

    public UserController(DBService dbService)
    {
      _dbService = dbService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
      if (string.IsNullOrEmpty(user.Username) || string.IsNullOrEmpty(user.Password) || string.IsNullOrEmpty(user.Email))
      {
        return BadRequest("Username, password, and email are required");
      }

      var checkUserQuery = $"SELECT * FROM users WHERE username = '{user.Username}';";
      var checkUserResult = await _dbService.ExecuteQueryAsync(checkUserQuery);

      if (checkUserResult.Contains(user.Username))
      {
        return BadRequest("Username already exists.");
      }

      var insertUserQuery = $"INSERT INTO users (Username, Password, 'E-mail') VALUES ('{user.Username}', '{user.Password}', '{user.Email}');";
      await _dbService.ExecuteQueryAsync(insertUserQuery);

      return Ok("User registered successfully.");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] User user)
    {
      if (user == null)
      {
        return BadRequest("Invalid request body");
      }

      if (string.IsNullOrEmpty(user.Username) || string.IsNullOrEmpty(user.Password))
      {
        return BadRequest("Username and password are required");
      }

      var query = $"SELECT * FROM users WHERE username = '{user.Username}' AND password = '{user.Password}';";
      var result = await _dbService.ExecuteQueryAsync(query);

      if (result.Contains(user.Username) && result.Contains(user.Password))
      {
        return Ok("Login successful.");
      }
      else
      {
        return Unauthorized("Invalid username or password.");
      }
    }
  }
}

