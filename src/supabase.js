import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tdgobtsqsykbskbhnfqa.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDg5NzE1NSwiZXhwIjoxOTU2NDczMTU1fQ.4Ib3B1kaEbm73miEcZ5cjSiXPsJN1uhFHfiil9B1VVo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
