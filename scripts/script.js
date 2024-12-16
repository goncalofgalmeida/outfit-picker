const supabaseUrl = 'https://gsnupnvhqxkdvmlvarur.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzbnVwbnZocXhrZHZtbHZhcnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5ODkzNjYsImV4cCI6MjA0NTU2NTM2Nn0.Qoo5FwjIWTubZG17laz1oLyBCG5SRO3fP782opj6u3Y';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fetch all categories and log them
async function fetchCategories() {
    let { data: categories, error } = await supabase
      .from('categories')
      .select('*');
  
    if (error) console.error("Error fetching categories:", error);
    else console.log("Categories:", categories);
  }
  
  fetchCategories();
  