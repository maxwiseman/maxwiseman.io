"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { IconUser } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

export function GithubWidget({
  commitData,
  repoData,
  ...props
}: {
  commitData: BranchData[];
  repoData: RepoData;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  function calculateTime(): string {
    return moment(commitData[0]?.commit.author.date).fromNow();
  }
  const timeIntervalRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeIntervalRef.current = setInterval(() => {
      setTime(calculateTime());
    }, 1000);
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- this is fine
    return () => clearInterval(timeIntervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- this is also fine
  }, [commitData[0]?.commit.author.date]);

  const [time, setTime] = useState<string>(() => calculateTime());

  return (
    <div {...props}>
      <Link href={repoData.html_url}>
        <Card className="flex items-center gap-2 p-4">
          <Avatar className="h-7 w-7">
            <AvatarImage src={commitData[0]?.author.avatar_url} />
            <AvatarFallback>
              <IconUser />
            </AvatarFallback>
          </Avatar>
          <span className="font-semibold">
            {commitData[0]?.commit.author.name}:
          </span>
          <span className="line-clamp-1 grow text-muted-foreground">
            {commitData[0]?.commit.message}
          </span>
          <span className="shrink-0 text-muted-foreground">{time}</span>
        </Card>
      </Link>
    </div>
  );
}

export interface BranchData {
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: Date;
    };
    committer: {
      name: string;
      email: string;
      date: Date;
    };
    message: string;
    tree: {
      sha: string;
      url: URL;
    };
    url: URL;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: string;
      payload: string;
    };
  };
  url: URL;
  html_url: URL;
  comments_url: URL;
  author: {
    login: URL;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: URL;
    html_url: URL;
    followers_url: URL;
    following_url: URL;
    gists_url: URL;
    starred_url: URL;
    subscriptions_url: URL;
    organizations_url: URL;
    repos_url: URL;
    events_url: URL;
    received_events_url: URL;
    type: string;
    site_admin: false;
  };
  committer: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: URL;
    gravatar_id: string;
    url: URL;
    html_url: URL;
    followers_url: URL;
    following_url: URL;
    gists_url: URL;
    starred_url: URL;
    subscriptions_url: URL;
    organizations_url: URL;
    repos_url: URL;
    events_url: URL;
    received_events_url: URL;
    type: string;
    site_admin: boolean;
  };
  parents: [
    {
      sha: string;
      url: URL;
      html_url: URL;
    },
  ];
}

export interface RepoData {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  temp_clone_token?: string;
  network_count: number;
  subscribers_count: number;
}
