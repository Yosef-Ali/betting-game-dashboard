export interface ProfileCardProps {
  avatar: string;
  name: string;
  location: LocationProps;
  followers: FollowersProps;
  rating: number;
  onEdit: () => void;
  isLoading?: boolean;
}
export interface LocationProps {
  country: string;
  city: string;
}
export interface FollowersProps {
  followersCount: number;
  followingCount: number;
}
