import axios from 'axios';
import { API } from './api';

export async function fetchMagic(signal, url){ try {return await axios.get(url, {signal}); }catch (error){console.error(`Error:${error}`);
  }
}

// to remove :) 
export async function fetchSpellBook(signal) {
  try {
    return await axios.get(API.allSpells, { signal });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export async function fetchAllStudents(signal) {
  try {
    return await axios.get(API.allCharacters, { signal });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export async function fetchGryffindor(signal) {
  try {
    return await axios.get(API.gryffindorHouse, { signal });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export async function fetchSlytherin(signal) {
  try {
    return await axios.get(API.slytherinHouse, { signal });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export async function fetchRavenclaw(signal) {
  try {
    return await axios.get(API.ravenclawHouse, { signal });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export async function fetchHufflepuff(signal) {
  try {
    return await axios.get(API.hufflepuffHouse, { signal });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
