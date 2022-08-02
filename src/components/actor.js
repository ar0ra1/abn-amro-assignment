import React, { memo } from "react";

const ActorComponent = ({ actor }) => {
  const image = actor.character?.image?.original;
  const realName = actor.person?.name;
  const characterName = actor.character?.name;

  return (
    <div className="flex gap-4 h-60">
      <img
        loading="lazy"
        className="object-cover h-full w-[160px]"
        src={`${
          image ? image : `https://robohash.org/${realName}?size=160x240`
        }`}
        alt={`${realName}`}
      />
      <div>
        <p data-testid="real-name" className="pt-10 font-bold text-abn-green">
          {realName}
        </p>
        as
        <p data-testid="character-name">{characterName}</p>
      </div>
    </div>
  );
};

export const Actor = memo(ActorComponent);
