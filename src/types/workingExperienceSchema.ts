import {} from '@contentful/rich-text-types'; 

export type WorkingExperienceSchema = {
  company: string;
  position: string;
  skills: string[];
  startDate: string;
  endDate?: string;
  description: any;
}