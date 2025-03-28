import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes for handling contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }
      
      // Here in a real app we would store the contact message
      // or send an email, etc.
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message received successfully' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error, please try again later' 
      });
    }
  });

  // Resume download route
  app.get('/api/resume', (req, res) => {
    // In a real app, this would fetch from storage or redirect
    res.redirect('https://github.com/zulfiqarAlibalti/Resume/blob/master/Resume.pdf');
  });

  const httpServer = createServer(app);

  return httpServer;
}
