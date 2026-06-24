import { z } from 'zod';

export const submitItemSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  url: z.string().url('Must be a valid URL'),
  description: z.string().min(1, 'Description is required').max(200),
  detail: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  logoUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  pricingModel: z.enum(['free', 'paid', 'freemium']).optional(),
  pricingDetail: z.string().optional(),
});

export type SubmitItemInput = z.infer<typeof submitItemSchema>;