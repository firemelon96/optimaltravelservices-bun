import { expeditions } from '@/data/expeditions';
import { tours } from '@/data/tours';
import { transfers } from '@/data/transfers';
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const balabacData = tours.filter(
    (tour) => tour.destination.toLowerCase() === 'balabac'
  );

  const balabacEntries: MetadataRoute.Sitemap = balabacData.map(({ id }) => ({
    url: `${BASE_URL}/balabac/${id}`,
    changeFrequency: 'weekly',
    priority: 1.0,
  }));

  const coronData = tours.filter(
    (tour) => tour.destination.toLowerCase() === 'coron'
  );

  const coronEntries: MetadataRoute.Sitemap = coronData.map(({ id }) => ({
    url: `${BASE_URL}/coron/${id}`,
    changeFrequency: 'weekly',
    priority: 1.0,
  }));

  const elnidoData = tours.filter(
    (tour) => tour.destination.toLowerCase() === 'el nido'
  );

  const elnidoEntries: MetadataRoute.Sitemap = elnidoData.map(({ id }) => ({
    url: `${BASE_URL}/el-nido/${id}`,
    changeFrequency: 'weekly',
    priority: 1.0,
  }));

  const portBartonData = tours.filter(
    (tour) => tour.destination.toLowerCase() === 'port barton'
  );

  const portEntries: MetadataRoute.Sitemap = portBartonData.map(({ id }) => ({
    url: `${BASE_URL}/port-barton/${id}`,
    changeFrequency: 'weekly',
    priority: 1.0,
  }));

  const ppcData = tours.filter(
    (tour) => tour.destination.toLowerCase() === 'puerto princesa'
  );

  const ppcEntries: MetadataRoute.Sitemap = ppcData.map(({ id }) => ({
    url: `${BASE_URL}/puerto-princesa/${id}`,
    changeFrequency: 'weekly',
    priority: 1.0,
  }));

  const transferEntries: MetadataRoute.Sitemap = transfers.map(({ id }) => ({
    url: `${BASE_URL}/transfers/${id}`,
  }));

  const expeEntries: MetadataRoute.Sitemap = expeditions.map(({ id }) => ({
    url: `${BASE_URL}/expeditions/${id}`,
  }));

  return [
    ...balabacEntries,
    ...coronEntries,
    ...elnidoEntries,
    ...portEntries,
    ...ppcEntries,
    ...transferEntries,
    ...expeEntries,
    {
      url: `${BASE_URL}/`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/about-us`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/contact-us`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/balabac`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/coron`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/el-nido`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/expeditions`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/port-barton`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/puerto-princesa`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/transfers`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/balabac/`,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ];
}
