import { prisma } from '@/lib/prisma';
import { Config } from '@/types';

export async function getConfigByUserId(userId: string): Promise<Config | null> {
  return prisma.config.findUnique({
    where: { userId },
  });
}

export async function createConfig(data: { userId: string, dark: boolean }): Promise<Config> {
  return prisma.config.create({
    data,
  });
}

export async function updateConfig(userId: string, dark: boolean): Promise<Config> {
  return prisma.config.update({
    where: { userId },
    data: { dark },
  });
}

export async function deleteConfig(userId: string): Promise<Config> {
  return prisma.config.delete({
    where: { userId },
  });
}

export async function getOrCreateConfig(userId: string): Promise<Config> {
  const config = await getConfigByUserId(userId);
  
  if (config) {
    return config;
  }
  
  return createConfig({
    userId,
    dark: false, // valor por defecto
  });
} 