# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.30

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Produce verbose output by default.
VERBOSE = 1

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\CMake\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\CMake\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend

# Include any dependencies generated for this target.
include CMakeFiles/SteamQuack.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/SteamQuack.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/SteamQuack.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/SteamQuack.dir/flags.make

CMakeFiles/SteamQuack.dir/main.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/main.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/main.cpp
CMakeFiles/SteamQuack.dir/main.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/SteamQuack.dir/main.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/main.cpp.o -MF CMakeFiles\SteamQuack.dir\main.cpp.o.d -o CMakeFiles\SteamQuack.dir\main.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\main.cpp

CMakeFiles/SteamQuack.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/main.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\main.cpp > CMakeFiles\SteamQuack.dir\main.cpp.i

CMakeFiles/SteamQuack.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/main.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\main.cpp -o CMakeFiles\SteamQuack.dir\main.cpp.s

CMakeFiles/SteamQuack.dir/game.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/game.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/game.cpp
CMakeFiles/SteamQuack.dir/game.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/SteamQuack.dir/game.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/game.cpp.o -MF CMakeFiles\SteamQuack.dir\game.cpp.o.d -o CMakeFiles\SteamQuack.dir\game.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\game.cpp

CMakeFiles/SteamQuack.dir/game.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/game.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\game.cpp > CMakeFiles\SteamQuack.dir\game.cpp.i

CMakeFiles/SteamQuack.dir/game.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/game.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\game.cpp -o CMakeFiles\SteamQuack.dir\game.cpp.s

CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/dist/jsoncpp.cpp
CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.o -MF CMakeFiles\SteamQuack.dir\dist\jsoncpp.cpp.o.d -o CMakeFiles\SteamQuack.dir\dist\jsoncpp.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\dist\jsoncpp.cpp

CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\dist\jsoncpp.cpp > CMakeFiles\SteamQuack.dir\dist\jsoncpp.cpp.i

CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\dist\jsoncpp.cpp -o CMakeFiles\SteamQuack.dir\dist\jsoncpp.cpp.s

CMakeFiles/SteamQuack.dir/user_profile.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/user_profile.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/user_profile.cpp
CMakeFiles/SteamQuack.dir/user_profile.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/SteamQuack.dir/user_profile.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/user_profile.cpp.o -MF CMakeFiles\SteamQuack.dir\user_profile.cpp.o.d -o CMakeFiles\SteamQuack.dir\user_profile.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\user_profile.cpp

CMakeFiles/SteamQuack.dir/user_profile.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/user_profile.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\user_profile.cpp > CMakeFiles\SteamQuack.dir\user_profile.cpp.i

CMakeFiles/SteamQuack.dir/user_profile.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/user_profile.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\user_profile.cpp -o CMakeFiles\SteamQuack.dir\user_profile.cpp.s

CMakeFiles/SteamQuack.dir/settings.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/settings.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/settings.cpp
CMakeFiles/SteamQuack.dir/settings.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object CMakeFiles/SteamQuack.dir/settings.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/settings.cpp.o -MF CMakeFiles\SteamQuack.dir\settings.cpp.o.d -o CMakeFiles\SteamQuack.dir\settings.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\settings.cpp

CMakeFiles/SteamQuack.dir/settings.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/settings.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\settings.cpp > CMakeFiles\SteamQuack.dir\settings.cpp.i

CMakeFiles/SteamQuack.dir/settings.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/settings.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\settings.cpp -o CMakeFiles\SteamQuack.dir\settings.cpp.s

CMakeFiles/SteamQuack.dir/app.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/app.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/app.cpp
CMakeFiles/SteamQuack.dir/app.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object CMakeFiles/SteamQuack.dir/app.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/app.cpp.o -MF CMakeFiles\SteamQuack.dir\app.cpp.o.d -o CMakeFiles\SteamQuack.dir\app.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\app.cpp

CMakeFiles/SteamQuack.dir/app.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/app.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\app.cpp > CMakeFiles\SteamQuack.dir\app.cpp.i

CMakeFiles/SteamQuack.dir/app.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/app.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\app.cpp -o CMakeFiles\SteamQuack.dir\app.cpp.s

CMakeFiles/SteamQuack.dir/setup_functions.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/setup_functions.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/setup_functions.cpp
CMakeFiles/SteamQuack.dir/setup_functions.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object CMakeFiles/SteamQuack.dir/setup_functions.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/setup_functions.cpp.o -MF CMakeFiles\SteamQuack.dir\setup_functions.cpp.o.d -o CMakeFiles\SteamQuack.dir\setup_functions.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\setup_functions.cpp

CMakeFiles/SteamQuack.dir/setup_functions.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/setup_functions.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\setup_functions.cpp > CMakeFiles\SteamQuack.dir\setup_functions.cpp.i

CMakeFiles/SteamQuack.dir/setup_functions.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/setup_functions.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\setup_functions.cpp -o CMakeFiles\SteamQuack.dir\setup_functions.cpp.s

CMakeFiles/SteamQuack.dir/helper_functions.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/helper_functions.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/helper_functions.cpp
CMakeFiles/SteamQuack.dir/helper_functions.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Building CXX object CMakeFiles/SteamQuack.dir/helper_functions.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/helper_functions.cpp.o -MF CMakeFiles\SteamQuack.dir\helper_functions.cpp.o.d -o CMakeFiles\SteamQuack.dir\helper_functions.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\helper_functions.cpp

CMakeFiles/SteamQuack.dir/helper_functions.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/helper_functions.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\helper_functions.cpp > CMakeFiles\SteamQuack.dir\helper_functions.cpp.i

CMakeFiles/SteamQuack.dir/helper_functions.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/helper_functions.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\helper_functions.cpp -o CMakeFiles\SteamQuack.dir\helper_functions.cpp.s

CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.o: CMakeFiles/SteamQuack.dir/flags.make
CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.o: C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/recommendation_functions.cpp
CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.o: CMakeFiles/SteamQuack.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_9) "Building CXX object CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.o"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.o -MF CMakeFiles\SteamQuack.dir\recommendation_functions.cpp.o.d -o CMakeFiles\SteamQuack.dir\recommendation_functions.cpp.o -c C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\recommendation_functions.cpp

CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.i"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\recommendation_functions.cpp > CMakeFiles\SteamQuack.dir\recommendation_functions.cpp.i

CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.s"
	W:\Libs\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\recommendation_functions.cpp -o CMakeFiles\SteamQuack.dir\recommendation_functions.cpp.s

# Object files for target SteamQuack
SteamQuack_OBJECTS = \
"CMakeFiles/SteamQuack.dir/main.cpp.o" \
"CMakeFiles/SteamQuack.dir/game.cpp.o" \
"CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.o" \
"CMakeFiles/SteamQuack.dir/user_profile.cpp.o" \
"CMakeFiles/SteamQuack.dir/settings.cpp.o" \
"CMakeFiles/SteamQuack.dir/app.cpp.o" \
"CMakeFiles/SteamQuack.dir/setup_functions.cpp.o" \
"CMakeFiles/SteamQuack.dir/helper_functions.cpp.o" \
"CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.o"

# External object files for target SteamQuack
SteamQuack_EXTERNAL_OBJECTS =

SteamQuack.html: CMakeFiles/SteamQuack.dir/main.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/game.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/dist/jsoncpp.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/user_profile.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/settings.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/app.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/setup_functions.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/helper_functions.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/recommendation_functions.cpp.o
SteamQuack.html: CMakeFiles/SteamQuack.dir/build.make
SteamQuack.html: CMakeFiles/SteamQuack.dir/objects1.rsp
SteamQuack.html: CMakeFiles/SteamQuack.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles --progress-num=$(CMAKE_PROGRESS_10) "Linking CXX executable SteamQuack.html"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\SteamQuack.dir\link.txt --verbose=$(VERBOSE)
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --blue --bold "Optimizing WebAssembly file with wasm-opt"
	W:\Libs\emsdk\binaryen\tag-1.38.30_vs2019_64bit_binaryen\bin\wasm-opt.exe -O3 C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/liamckenna.github.io/Backend/SteamQuack.wasm -o C:/Users/lmcmc/CLionProjects/GameRecommenderFromSteamProfile/liamckenna.github.io/Backend/SteamQuack.optimized.wasm

# Rule to build all files generated by this target.
CMakeFiles/SteamQuack.dir/build: SteamQuack.html
.PHONY : CMakeFiles/SteamQuack.dir/build

CMakeFiles/SteamQuack.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\SteamQuack.dir\cmake_clean.cmake
.PHONY : CMakeFiles/SteamQuack.dir/clean

CMakeFiles/SteamQuack.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend C:\Users\lmcmc\CLionProjects\GameRecommenderFromSteamProfile\liamckenna.github.io\Backend\CMakeFiles\SteamQuack.dir\DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/SteamQuack.dir/depend

