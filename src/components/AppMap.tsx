import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  LatLng,
  Marker as LeafletMarker,
  Icon,
  Map as LeafletMap,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import { Add, Edit, Location, Trash } from "iconsax-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

import markerIcon from "@/assets/img/marker-icon.png";
import { CloseIcon } from "@/icons/closeIcon.tsx";

const center = { lat: 51.505, lng: -0.09 };

const DraggableMarker = () => {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef<LeafletMarker | null>(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;

        if (marker) {
          const latLng: LatLng = marker.getLatLng();

          setPosition(latLng);
        }
      },
    }),
    [],
  );

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <Marker
      ref={markerRef}
      draggable={draggable}
      eventHandlers={eventHandlers}
      icon={customIcon}
      position={position}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable ? "Marker is draggable" : "Click to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
};

export const AppMap = ({ props }: { props: any }) => {
  const { isEdit } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenAddModal,
    onOpen: onOpenAddModal,
    onOpenChange: onOpenChangeAddModal,
  } = useDisclosure();
  const {
    isOpen: isDeleteConfirmOpen,
    onOpen: onDeleteConfirmOpen,
    onOpenChange: onDeleteConfirmOpenChange,
  } = useDisclosure();
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (isOpen && mapRef.current) {
      setTimeout(() => {
        mapRef.current?.invalidateSize();
      }, 300);
    }
  }, [isOpen]);

  return (
    <div className="bg-white dark:bg-info-1000 p-3 rounded-5 flex flex-col gap-1 h-2/5 shadow-shadow-light-tight/1 dark:shadow-shadow-dark-tight/1">
      <div className="flex justify-between pb-1.5 border-b border-netural-100">
        <span className="text-secondary-1000 dark:text-white text-base font-semibold leading-normal">
          Location
        </span>
        <div>
          {isEdit ? (
            <Button
              className="shadow-shadow-light-tight/1 p-1 !min-w-fit !rounded-2 !h-5 !w-5 bg-white dark:bg-info-1000 flex gap-2"
              variant="light"
              onPress={onOpen}
            >
              <Edit className="text-secondary-1000 dark:text-white" size="14" />
            </Button>
          ) : (
            <Button
              className="shadow-shadow-light-tight/1 dark:shadow-shadow-dark-tight/1 p-1 !min-w-fit !rounded-2 !h-5 bg-white dark:bg-info-1000 flex gap-2"
              variant="light"
              onPress={onOpenAddModal}
            >
              <Add className="text-secondary-1000 dark:text-white" size="14" />
              <span className="text-secondary-1000 dark:text-white font-normal text-xs">
                Add New One
              </span>
            </Button>
          )}
        </div>
      </div>

      <MapContainer
        center={center}
        className="!rounded-4 h-full"
        scrollWheelZoom={false}
        style={{ width: "100%" }}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
      </MapContainer>

      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12 h-[600px]">
          {(onClose) => (
            <>
              <ModalHeader>
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2 rounded-4 bg-secondary-400 dark:bg-surface-200 px-3 py-1.5 w-fit">
                    <Location className="text-white" size="22" />
                    <span className="text-white text-xl font-normal">
                      Edit Location
                    </span>
                  </div>
                  <Button
                    className="!w-6 !h-6 !p-0 !min-w-fit !rounded-0"
                    variant="light"
                    onPress={onClose}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </ModalHeader>

              <ModalBody className="h-[400px]">
                <MapContainer
                  center={center}
                  className="h-[304px] w-full !rounded-4 overflow-hidden"
                  scrollWheelZoom={false}
                  zoom={13}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DraggableMarker />
                </MapContainer>
              </ModalBody>

              <ModalFooter>
                <Button
                  className="!px-1.5 !py-3 !rounded-4"
                  color="default"
                  variant="light"
                  onPress={onDeleteConfirmOpen}
                >
                  <div className="flex gap-2 items-center">
                    <Trash className="text-danger-700" size="22" />
                    <span className="text-danger-700">Delete</span>
                  </div>
                </Button>
                <Button
                  className="text-secondary-800"
                  color="default"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-secondary-400 dark:bg-surface-200 text-white shadow-shadow-light-tight/1 !rounded-4 !px-1.5 !py-3"
                  onPress={onClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpenAddModal}
        size="2xl"
        onOpenChange={onOpenChangeAddModal}
      >
        <ModalContent className="rounded-[12px] bg-white/30 dark:bg-[#01101a4d] shadow-md backdrop-blur-[40px] p-12 h-[600px]">
          {(onClose) => (
            <>
              <ModalHeader>
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2 rounded-4 bg-secondary-400 dark:bg-surface-200 px-3 py-1.5 w-fit">
                    <Location className="text-white" size="22" />
                    <span className="text-white text-xl font-normal">
                      Add Location
                    </span>
                  </div>
                  <Button
                    className="!w-6 !h-6 !p-0 !min-w-fit !rounded-0"
                    variant="light"
                    onPress={onClose}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </ModalHeader>

              <ModalBody className="h-[400px]">
                <MapContainer
                  center={center}
                  className="h-[304px] w-full !rounded-4 overflow-hidden"
                  scrollWheelZoom={false}
                  zoom={13}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DraggableMarker />
                </MapContainer>
              </ModalBody>

              <ModalFooter>
                <Button
                  className="text-secondary-800 dark:text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  color="default"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-secondary-400 dark:bg-surface-200 text-white shadow-shadow-light-tight/1 !rounded-4 !px-1.5 !py-3"
                  onPress={onClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isDeleteConfirmOpen}
        size="2xl"
        onOpenChange={onDeleteConfirmOpenChange}
      >
        <ModalContent className="rounded-[12px] bg-white/30 dark:bg-[#01101a4d] shadow-md backdrop-blur-[40px] p-12">
          {(onClose) => (
            <div className="flex flex-col gap-10">
              <ModalHeader className="!p-0">
                <div className="flex justify-between items-center w-full">
                  <div className="bg-danger flex gap-2 !rounded-4 !px-3 !py-1.5 items-center">
                    <Trash className="text-white" size="18" />
                    <span className="text-xl text-white font-normal leading-normal">
                      Would it be acceptable for you to remove this?
                    </span>
                  </div>
                  <Button
                    className="!w-6 !h-6 !p-0 !min-w-fit !rounded-0"
                    variant="light"
                    onPress={onClose}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </ModalHeader>
              <ModalFooter className="!p-0">
                <Button
                  className="text-secondary-800 dark:text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  color="default"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-danger text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  onPress={() => {
                    console.log("Location deleted");
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
