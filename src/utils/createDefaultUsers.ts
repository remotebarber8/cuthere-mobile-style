
/*
This file is for reference only to show how to create the default users.
You can run this code in the browser console when on the Auth page if needed.

import { supabase } from "@/integrations/supabase/client";

// Create user with 'user' role
async function createUserAccount() {
  try {
    const { error } = await supabase.auth.signUp({
      email: 'user@mail.com',
      password: 'Mail@123',
    });
    
    if (error) throw error;
    console.log("User account created successfully");
  } catch (error: any) {
    console.error("Error creating user account:", error.message);
  }
}

// Create user with 'barber' role
async function createBarberAccount() {
  try {
    const { error } = await supabase.auth.signUp({
      email: 'barber@mail.com',
      password: 'Mail@123',
      options: {
        data: {
          role: 'barber',
        }
      }
    });
    
    if (error) throw error;
    console.log("Barber account created successfully");
  } catch (error: any) {
    console.error("Error creating barber account:", error.message);
  }
}

// Create user with 'admin' role
async function createAdminAccount() {
  try {
    const { error } = await supabase.auth.signUp({
      email: 'admin@mail.com',
      password: 'Mail@123',
      options: {
        data: {
          role: 'admin',
        }
      }
    });
    
    if (error) throw error;
    console.log("Admin account created successfully");
  } catch (error: any) {
    console.error("Error creating admin account:", error.message);
  }
}

// Run these functions to create the default users
// createUserAccount();
// createBarberAccount();
// createAdminAccount();
*/
