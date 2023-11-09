import { Document } from "@contentful/rich-text-types";
import { Entry, EntrySkeletonType } from "contentful";

export type WorkingExperienceSchema = {
  company: string;
  position: string;
  skills: string[];
  startDate: string;
  endDate?: string;
  description: Document;
  articles?: Entry<EntrySkeletonType, undefined, string>[];

};

export type ArticleSchema = {
  title: string;
  url: string;
  favicons: Favicon;
  description: string;
  image: string;
}

export type Favicon = 'youtube' | 'instagram' | 'linkedIn'
