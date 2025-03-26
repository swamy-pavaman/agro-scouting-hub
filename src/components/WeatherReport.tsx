
import { Sun, Cloud, CloudRain, Wind } from "lucide-react";
import { useState, useEffect } from "react";

type WeatherData = {
  temperature: number;
  condition: "sunny" | "cloudy" | "rainy" | "windy";
  humidity: number;
  windSpeed: number;
  location: string;
  forecast: {
    day: string;
    temperature: number;
    condition: "sunny" | "cloudy" | "rainy" | "windy";
  }[];
};

// Mock weather data for demonstration
const mockWeatherData: WeatherData = {
  temperature: 28,
  condition: "sunny",
  humidity: 65,
  windSpeed: 12,
  location: "Nashik, Maharashtra",
  forecast: [
    { day: "Tue", temperature: 29, condition: "sunny" },
    { day: "Wed", temperature: 27, condition: "cloudy" },
    { day: "Thu", temperature: 25, condition: "rainy" },
    { day: "Fri", temperature: 26, condition: "windy" },
    { day: "Sat", temperature: 28, condition: "sunny" },
  ],
};

const getWeatherIcon = (condition: WeatherData["condition"], size = 24) => {
  switch (condition) {
    case "sunny":
      return <Sun size={size} className="text-yellow-500" />;
    case "cloudy":
      return <Cloud size={size} className="text-gray-500" />;
    case "rainy":
      return <CloudRain size={size} className="text-blue-500" />;
    case "windy":
      return <Wind size={size} className="text-teal-500" />;
  }
};

export function WeatherReport() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch from an actual weather API
    const fetchWeather = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setWeather(mockWeatherData);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm animate-pulse">
        <div className="h-32 bg-gray-200 rounded-xl"></div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 text-center">
        <p className="text-muted-foreground">Weather data unavailable</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-agro-primary to-agro-secondary p-4 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">{weather.location}</h3>
            <p className="text-sm opacity-90">Today's Weather</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{weather.temperature}°C</p>
            <p className="text-sm capitalize">{weather.condition}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="font-medium">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-teal-500" />
            <div>
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="font-medium">{weather.windSpeed} km/h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-3">5-Day Forecast</p>
          <div className="flex justify-between">
            {weather.forecast.map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-xs font-medium mb-1">{day.day}</p>
                {getWeatherIcon(day.condition, 20)}
                <p className="text-sm font-medium mt-1">{day.temperature}°</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
