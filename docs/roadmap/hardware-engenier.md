# Lista de tecnologías para aprender

## Lenguajes de programación

- C (kernel Linux, drivers y firmware)
- Rust (drivers, sistemas embebidos y bajo nivel)
- Go (APIs y servicios backend)

## Linux y sistemas operativos

- Linux kernel (compilación, configuración, módulos)
- Device trees
- Arquitectura de sistemas operativos
- Kernel Linux para ARM

## Herramientas de Android y mobile

- Fastboot (flasheo y control del bootloader)
- ADB (ya dominado)
- Heimdall u Odin (según fabricante, opcional)
- AOSP (Android Open Source Project)
- LineageOS (ROMs personalizadas)
- XDA Developers (comunidad y tutoriales por modelo)

## Hardware y arquitectura

- Arquitectura ARM
- Chipsets (Qualcomm, MediaTek)
- Datasheets y documentación técnica
- Bootloaders (U-Boot, bootloader de Android)
- Drivers de Wi-Fi, Bluetooth y modem en Linux
- Firmware

## Electrónica básica

- GPIO y protocolos de comunicación (UART, SPI, I2C)
- Placas de desarrollo (Raspberry Pi, BeagleBone)
- Arduino (opcional, como puerta de entrada)

## DevOps (ya tienes base)

- Docker y contenedores para entornos embebidos
- CI/CD para sistemas embebidos
- Automatización de compilación y despliegue

## Herramientas de desarrollo

- Git y control de versiones
- Make y sistemas de compilación (CMake, Cargo)
- WSL2 y Ubuntu (ya dominado)
- Cross-compilation para ARM

## Portafolio y comunidad

- Contribuciones a proyectos open source (AOSP, LineageOS, Linux kernel)
- GitHub con proyectos documentados
- Comunidades de embedded systems

---

# Capas de un dispositivo móvil

## 1. Hardware

- Procesador (SoC: CPU, GPU, DSP, módem integrado)
- Memoria RAM y almacenamiento flash (UFS o eMMC)
- Sensores, pantalla, cámara, batería, antenas
- Chips de comunicación (Wi-Fi, Bluetooth, GPS, módem celular)

## 2. Firmware de bajo nivel

- Boot ROM (código grabado de fábrica, no modificable)
- Bootloader primario y secundario (inicializa RAM, verifica firmware)
- Firmware de componentes (módem, GPU, Wi-Fi, sensores)
- Trust zone / TEE (entorno seguro para claves y datos sensibles)

## 3. Kernel

- Kernel Linux (gestión de procesos, memoria, drivers y sistema de archivos)
- Drivers de hardware (pantalla, Wi-Fi, Bluetooth, cámara, táctil)
- Device tree (describe el hardware al kernel)

## 4. Capa de librerías y runtime nativo

- Librerías en C/C++ (bionic, OpenGL/Vulkan, media, SSL)
- HAL (Hardware Abstraction Layer, interfaz entre framework y drivers)
- Runtime nativo (ART en Android, que ejecuta bytecode)

## 5. Framework del sistema

- Servicios del sistema (gestor de ventanas, energía, notificaciones, conectividad)
- APIs en Java/Kotlin que las apps usan
- Gestor de paquetes y permisos

## 6. Aplicaciones

- Apps del sistema (teléfono, mensajes, cámara, ajustes)
- Apps de terceros instaladas por el usuario

## Nota para tu caso

Si quitas Android, mantienes las capas 1, 2 y 3 (hardware, firmware y kernel). Las capas 4, 5 y 6 son las que reemplazarías por tu propio userspace, como un rootfs de Linux con tu API en Go.

---

# Lo que te falta aprender

## Seguridad y arranque

- Secure Boot y cadena de confianza (verified boot)
- Firmas de imágenes y verificación de particiones
- Trust zone / TEE (OP-TEE como referencia)
- Desbloqueo de bootloader y sus implicaciones de seguridad

## Compilación y cross-compilation

- Toolchains para ARM (aarch64-linux-gnu)
- Kernel build system (Kbuild, Kconfig)
- Compilación de módulos externos
- Yocto o Buildroot para generar sistemas Linux embebidos

## Userspace Linux embebido

- Sistemas de init (systemd, OpenRC, BusyBox init)
- Creación de rootfs (Buildroot, Debian debootstrap, Alpine)
- Gestión de servicios y arranque del sistema
- Configuración de red sin Android (NetworkManager, wpa_supplicant)

## Drivers y depuración

- Módulos del kernel escritos en C
- Interfaces del kernel (sysfs, procfs, debugfs, ioctl)
- Depuración con UART serial, JTAG y logs del kernel (dmesg)
- Análisis de crashes (kdump, ramoops)

## Telefonía y conectividad

- Modem y protocolos AT
- ModemManager y oFono
- Drivers de Wi-Fi (nl80211, cfg80211)

## Herramientas de hardware

- Multímetro y lectura de esquemáticos básicos
- Conexión serial USB-TTL para ver el arranque
- Lectura de datasheets y device tree bindings

## Lenguajes y prácticas

- Rust para kernel (Rust for Linux)
- Pruebas automatizadas en hardware real (LAVA, kernelci)
- Git avanzado para parches al kernel (git send-email, mailing lists)
