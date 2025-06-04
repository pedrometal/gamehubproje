export const API_KEY = '8c2bf5db55a040b0b477209a84151cd7';
const BASE_URL = 'https://api.rawg.io/api';

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  metacritic: number;
  playtime: number;
  website: string;
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  platforms: Array<{
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }>;
  genres: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  screenshots: Array<{
    id: number;
    image: string;
  }>;
}

export async function getGameDetails(id: string): Promise<Game> {
  try {
    const response = await fetch(
      `${BASE_URL}/games/${id}?key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do jogo');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do jogo:', error);
    throw error;
  }
}

export async function getGameScreenshots(id: string): Promise<Game['screenshots']> {
  try {
    const response = await fetch(
      `${BASE_URL}/games/${id}/screenshots?key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar screenshots do jogo');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar screenshots do jogo:', error);
    throw error;
  }
}

export async function getSimilarGames(id: string): Promise<Game[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/games/${id}/game-series?key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar jogos similares');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar jogos similares:', error);
    throw error;
  }
}

// Exportação padrão do serviço
export default {
  getGameDetails,
  getGameScreenshots,
  getSimilarGames,
  API_KEY
}; 