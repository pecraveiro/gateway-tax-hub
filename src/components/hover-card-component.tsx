import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface HoverCardComponentProps {
  githubUsername: string;
  name: string;
  description: string;
  avatarFallback: string;
  role: string;
}

export function HoverCardComponent({
  githubUsername,
  name,
  description,
  avatarFallback,
  role,
}: HoverCardComponentProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline cursor-pointer inline-flex items-center"
        >
          @{githubUsername}
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={`https://github.com/${githubUsername}.png`} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                <span className="text-primary">@{githubUsername}</span> · {role}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
