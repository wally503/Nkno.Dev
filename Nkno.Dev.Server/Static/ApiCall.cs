using System.Reflection;

namespace Nkno.Dev.Server.Static
{
    public static class ApiCall
    {
        public static async Task<string> GetExternalApiResponse(string apiUrl)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(apiUrl);
                HttpResponseMessage response = await client.GetAsync(apiUrl);

                response.EnsureSuccessStatusCode();
                var result = await response.Content.ReadAsStringAsync();
                return result;
            }
        }


    }
}
