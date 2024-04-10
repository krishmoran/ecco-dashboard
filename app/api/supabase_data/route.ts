import { getUsers, getWatchedVideos, getSharedVideos } from './supabaseService';

export const GET = async (req, res) => {
  try {
    const users = await getUsers();
    const videosWatched = await getWatchedVideos();
    const videosShared = await getSharedVideos();

    res.status(200).json({
      totalUsers: users.length,
      totalVideosWatched: videosWatched.length,
      totalVideosShared: videosShared.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};