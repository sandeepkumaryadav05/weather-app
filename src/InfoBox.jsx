import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1595365695759-2c0cf436e90b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://i.pinimg.com/736x/50/47/a2/5047a20758ab84f941e7ceaced791ef9.jpg";

    const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 70
                            ? RAIN_URL
                            : toCelsius(info.temp) > 15
                            ? HOT_URL
                            : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {" "} 
                            {info.humidity > 70 ? (
                                <ThunderstormIcon />
                            ) : info.temp > 15 ? (
                                <WbSunnyIcon />
                            ) : (
                                <AcUnitIcon />
                            )}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature: {toCelsius(info.temp)}&deg;C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Min-Temp: {toCelsius(info.temp_min)}&deg;C</p>
                            <p>Max-Temp: {toCelsius(info.temp_max)}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {toCelsius(info.feels_like)}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}