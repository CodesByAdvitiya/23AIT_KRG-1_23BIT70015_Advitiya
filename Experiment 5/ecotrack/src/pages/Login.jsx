import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        EcoTrack Login
      </Typography>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;