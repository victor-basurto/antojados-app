'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal';
import { ClassNames } from '@/lib/types';
import { Button } from '@heroui/react';

interface ModalProps extends ClassNames {
  isOpen: boolean;
  onOpenChange: (isCurrentlyOpen: boolean) => void;
  title: string;
  description: string;
}

const UIModal: React.FC<ModalProps> = ({
  isOpen,
  onOpenChange,
  title,
  description,
  classNames,
}) => {
  return (
    <>
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop:
            'br-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody className={classNames}>
                <p>{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default UIModal;
