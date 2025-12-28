"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  imagePath?: string;
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  keyFeatures?: string[];
  inProgress?: boolean;
  year: number;
  challenges?: string;
  collaborators?: {
    name: string;
    portfolio?: string;
    twitter?: string;
  }[];
  awards?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="cursor-pointer group border rounded-xl overflow-hidden hover:bg-muted/50 transition-all duration-200 ease-in-out shadow-sm block"
    >
      <div className="p-4">
        {/* Project Image */}
        <div className="w-full h-48 overflow-hidden group-hover:brightness-100 transition-all brightness-65 rounded-lg ease-in-out duration-200 mb-4">
          {project.imagePath ? (
            <Image
              src={project.imagePath}
              alt={`${project.name} screenshot`}
              width={400}
              height={300}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-48 bg-muted flex justify-center items-center">
              <ImageIcon className="w-10 h-10 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Project Header */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">{project.year}</Badge>
            {project.inProgress && (
              <Badge variant="outline" className="text-xs text-yellow-700 border-yellow-300 bg-yellow-50">
                In Progress
              </Badge>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Awards */}
        {/* {project.awards && project.awards.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1.5">
              {project.awards.slice(0, 1).map((award) => (
                <Badge key={award} variant="outline" className="text-xs text-amber-700 border-amber-300 bg-amber-50">
                  🏆 {award}
                </Badge>
              ))}
              {project.awards.length > 1 && (
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  +{project.awards.length - 1} more
                </Badge>
              )}
            </div>
          </div>
        )} */}

        {/* Collaborators */}
        {/* {project.collaborators && project.collaborators.length > 0 && (
          <div className="mb-3">
            <div className="text-xs text-muted-foreground">
              With: {project.collaborators.slice(0, 2).map(c => c.name).join(", ")}
              {project.collaborators.length > 2 && ` +${project.collaborators.length - 2} more`}
            </div>
          </div>
        )} */}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="secondary" className="text-xs text-muted-foreground">
              +{project.stack.length - 4}
            </Badge>
          )}
        </div>

        {/* Action Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex justify-end pt-2 border-t">
            <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
              {project.githubUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  title="View on GitHub"
                >
                  <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
              {project.liveUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  title="Visit"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
