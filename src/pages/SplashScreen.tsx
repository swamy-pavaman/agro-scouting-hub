
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Plant, Sun, Sprout } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and then redirect to home or login
    const timer = setTimeout(() => {
      setIsLoading(false);
      // After animation completes, navigate to index page
      setTimeout(() => {
        navigate("/welcome");
      }, 500);
    }, 100000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-agro-primary to-agro-secondary rounded-full flex items-center justify-center mb-4 shadow-lg relative overflow-hidden">
            {/* Logo elements */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="absolute"
            >
              <Sun className="w-32 h-32 text-agro-accent/30 absolute -top-8 -right-8" strokeWidth={1} />
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative z-10"
            >
              <Sprout className="w-12 h-12 text-white" strokeWidth={2.5} />
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-0 w-full h-6 bg-agro-dark/20 rounded-b-full"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Kapil Agro</h1>
          <p className="text-xl text-agro-primary font-medium mt-2">Scouting Hub</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          className="flex items-center justify-center"
        >
          <div className="w-12 h-1 bg-muted rounded overflow-hidden">
            <motion.div
              className="h-full bg-agro-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
