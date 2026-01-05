import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
  Stack
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { userNameValidator } from "../utils/validators";


function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", userNameValidator);
    const password = useInputValidation("");  
    
    const avatar = useFileHandler("single");

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log("Logging in with:", {
            username: username.value,
            password: password.value,
        });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        // Perform registration logic here
        console.log("Registering with:", {
            name: name.value,
            bio: bio.value,
            username: username.value,
            password: password.value,
            avatar: avatar.file,
        });
    };

    return (
        <div style={{ backgroundImage : "linear-gradient(to right, #39096dff, #2575fc)", height : "100vh"  }}>
                
            <Container
                style={{ backgroundImage : "linear-gradient(to right, #14096bff, #0c55d4ff)"}}
                component="main"
                maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
            <Paper
                elevation={3}
                sx={{
                p: 4,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                }}
            >
                {isLogin ? (
                <>
                    <Typography variant="h5" mb={2}>
                    Login
                    </Typography>

                    <form style={{ width: "100%" }} onSubmit={handleLogin}>
                    <TextField fullWidth label="Username" margin="normal" required value={username.value} onChange={username.changeHandler} />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        margin="normal"
                        required
                        value={password.value}
                        onChange={password.changeHandler}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>

                    <Typography align="center" mt={2}>
                        Don&apos;t have an account?
                    </Typography>

                    <Button fullWidth variant="text" onClick={() => setIsLogin(false)}>
                        Register
                    </Button>
                    </form>
                </>
                ) : (
                <>
                    <Typography variant="h5" mb={2}>
                    Register
                    </Typography>

                    <form style={{ width: "100%" }} onSubmit={handleRegister}>
                    <Stack
                        position="relative"
                        width="10rem"
                        height="10rem"
                        margin="auto"
                    >
                        <Avatar
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={avatar.preview || ""}
                        />
                        {
                            avatar.error && (
                                <Typography m={"1rem auto"} width={"fit-content"} display={"black"} color="error" varient="caption">
                                    { avatar.error }
                                </Typography>
                        )
                    }
                        <IconButton
                            component="label"
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                bgcolor: "rgba(0,0,0,0.6)",
                                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
                            }}
                        >
                        <>
                            <CameraAltIcon sx={{ color: "white" }} />
                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                        </>
                        </IconButton>
                    </Stack>

                    <TextField required fullWidth label="Name" margin="normal" varient="outlet" value={ name.value } onChange={ name.changeHandler } />
                    <TextField required fullWidth label="Bio" margin="normal" varient="outlet"  value={ bio.value } onChange={ bio.changeHandler } />
                    <TextField required fullWidth label="Username" margin="normal" varient="outlet" value={ username.value } onChange={username.changeHandler} />
                    {
                        username.error && (
                            <Typography color="error" varient="caption">
                                { username.error }
                            </Typography>
                        )
                    }
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        margin="normal"
                        required
                        value={password.value}
                        onChange={password.changeHandler}
                    />
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>

                    <Typography align="center" mt={2}>
                        Already have an account?
                    </Typography>

                    <Button fullWidth variant="text" onClick={() => setIsLogin(true)}>
                        Login
                    </Button>
                    </form>
                </>
                )}
            </Paper>
            </Container>

        </div>
    );
}

export default Login;
