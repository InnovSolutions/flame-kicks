using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;


public class DBService
{
  private readonly HttpClient _client;

  public DBService()
  {
    _client = new HttpClient();
    _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "HIYmw2mu_SOnGjqDaZ4FY1epmE_otPT_q3dIqd4a");
  }

  public async Task<string> ExecuteQueryAsync(string sqlQuery)
  {
    var request = new HttpRequestMessage
    {
      Method = HttpMethod.Post,
      RequestUri = new Uri("https://api.cloudflare.com/client/v4/accounts/b8f44bbdacdb28e77e3b029e6dd1bac2/d1/database/37c6d912-22d2-4a62-96b0-b598550f23d6/query"),
      Content = new StringContent($"{{ \"sql\": \"{sqlQuery}\" }}")
      {
        Headers = { ContentType = new MediaTypeHeaderValue("application/json") }
      }
    };

    using (var response = await _client.SendAsync(request))
    {
      response.EnsureSuccessStatusCode();
      return await response.Content.ReadAsStringAsync();
    }
  }
}