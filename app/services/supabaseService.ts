import { supabase } from "@/lib/supabase";

export const getUsers = async () => {
  const { data: users, error: usersError } = await supabase
    .from('users')
    .select('id');
  
  if (usersError) throw usersError;
  
  return users;
};

export const getWatchedVideos = async () => {
  const { data: videosWatched, error: videosWatchedError } = await supabase
    .from('videos')
    .select('id')
    .filter('watched', 'eq', true);
  
  if (videosWatchedError) throw videosWatchedError;
  
  return videosWatched;
};

export const getSharedVideos = async () => {
  const { data: videosShared, error: videosSharedError } = await supabase
    .from('videos')
    .select('id')
    .filter('shared', 'eq', true);
  
  if (videosSharedError) throw videosSharedError;
  
  return videosShared;
};