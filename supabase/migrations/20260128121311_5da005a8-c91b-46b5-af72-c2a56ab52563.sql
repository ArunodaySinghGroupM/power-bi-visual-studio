-- Add user_id column to dashboards table
ALTER TABLE public.dashboards 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update existing dashboards to allow null user_id for now
-- (existing dashboards created before auth will have null user_id)

-- Drop existing RLS policies
DROP POLICY IF EXISTS "Allow public read access" ON public.dashboards;
DROP POLICY IF EXISTS "Allow public insert" ON public.dashboards;
DROP POLICY IF EXISTS "Allow public update" ON public.dashboards;
DROP POLICY IF EXISTS "Allow public delete" ON public.dashboards;

-- Create new RLS policies for authenticated users
-- Users can view their own dashboards OR dashboards without user_id (legacy/public)
CREATE POLICY "Users can view own dashboards"
ON public.dashboards FOR SELECT
USING (auth.uid() = user_id OR user_id IS NULL);

-- Users can only insert dashboards with their own user_id
CREATE POLICY "Users can create own dashboards"
ON public.dashboards FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can only update their own dashboards
CREATE POLICY "Users can update own dashboards"
ON public.dashboards FOR UPDATE
USING (auth.uid() = user_id);

-- Users can only delete their own dashboards
CREATE POLICY "Users can delete own dashboards"
ON public.dashboards FOR DELETE
USING (auth.uid() = user_id);