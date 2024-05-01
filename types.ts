export type UserData = {
  user_id: number | null;
  username: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  is_alumni: boolean | null;
};

export type UserCredential = {
  token: string;
  user: UserData;
};

export type AuthContextType = {
  authState: UserCredential;
  setUserAuthInfo: (data: UserCredential) => void;
  isUserAuthenticated: () => boolean;
};

export type UserPost = {
  first_name: string;
  last_name: string;
  profile_image: string;
  created_at: string;
  title: string;
  content: string;
  link: string;
  likes: number;
};

export type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  profileImgage: string;
  followers: number;
  aboutMe: string;
  gitHubProfile: string;
  linkedinProfile: string;
  userResume: string;
  userName: string;
  portfolio: string;
  experience: string;
  suggestion: string;
  companies: {
    company_name: string;
    job_role: string;
    begin_date: string;
    last_date: string;
  }[];
  domains: {
    domain_name: string;
  }[];
  skills: {
    skill_name: string;
  }[];
};
