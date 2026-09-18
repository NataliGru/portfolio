'use client';

import { useTranslations } from 'next-intl';
import { Minus, Plus } from 'lucide-react';

import { Accordion, ToggleIconButton } from '@/shared';
import { AboutExperienceItem } from '@/widgets/about/model/types';

import { AboutEntryCardHeader } from '../about-entry-card-header';

import { AboutExperienceCardContent } from './about-experience-card-content';

export const AboutExperienceCard = ({
  period,
  company,
  position,
  projects,
  details,
}: AboutExperienceItem) => {
  const t = useTranslations('about.experience');

  return (
    <Accordion
      renderTrigger={({ isOpen, toggle, triggerId, panelId }) => (
        <AboutEntryCardHeader
          title={company}
          subtitle={position}
          period={period}
          action={
            <ToggleIconButton
              id={triggerId}
              ariaControls={panelId}
              ariaLabel={
                isOpen
                  ? t('hideDetails', { company })
                  : t('showDetails', { company })
              }
              checkedIcon={<Minus />}
              uncheckedIcon={<Plus />}
              checked={isOpen}
              onToggle={toggle}
              variant='control'
            />
          }
        />
      )}
    >
      <AboutExperienceCardContent projects={projects} details={details} />
    </Accordion>
  );
};
