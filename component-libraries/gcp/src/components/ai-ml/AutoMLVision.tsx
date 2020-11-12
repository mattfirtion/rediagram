import React, { FC, useMemo } from 'react';
import { useLabelText } from '@rediagram/cdk';
import { resolveAsset } from '../../assets';
import { useAssertProvider } from '../../hooks/assert-provider';
import { GCPNode } from '../internal/GCPNode';
import { GCPDependences } from '../../types';

export type AutoMLVisionProps = {
  name: string;
} & GCPDependences;

function resolveImage(): string {
  return resolveAsset('ai-ml/AutoMLVision.png');
}

function useIcon(): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(),
      size: 40,
    };
  }, []);
}

export const AutoMLVision: FC<AutoMLVisionProps> = ({ name, children, ...dependences }) => {
  useAssertProvider();
  const icon = useIcon();
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return <GCPNode service="AutoML Vision" name={name} icon={icon} label={label} {...dependences} />;
};

AutoMLVision.displayName = 'AutoMLVision';
