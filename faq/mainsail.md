# Mainsail

## How are estimations of the printing time calculated?

* **Estimate**\
  __The remaining time is calculated based on configurable factors, from which the average is derived.\
  Available factors_: File, Filament (see below)_
* **Slicer**\
  __The remaining time is determined taking into account the total printing time of the slicer.\
  _(see below: factor slicer)_
* **Print**\
  __Print time is the elapsed time since the first G-code movement. This usually does not include heating time or other preparations.
* **Total**\
  Total time is the elapsed time since the start of printing. This also takes into account the heating time.
*   **ETA (estimated time of arrival)**\
    The expected time of print completion. Based on configurable factors, from which the average is derived.

    Available factors_: File, Slicer, Filament (see below)_

### Calculation Factors <a href="#faktoren" id="faktoren"></a>

*   File\
    The remaining time is calculated based on the progress of the file and the print time.

    For example, if you have 100 bytes of metadata at the beginning and end of the file, and your file is 1200 bytes in total, 20% progress is only for the 1000 bytes of G-code in between. Based on this progress and the print time, the remaining time is calculated.
* **Slicer**\
  Similar to the file factor, the remaining time is calculated based on the progress of the file, but using the calculated total print time of the slicer instead of the print time.
*   **Filament**\
    The remaining time is calculated based on the filament length already fed and the print time.

    For example, if your print requires a total of 1000 mm of filament, and you have already fed 200 mm of filament, this represents 20% progress. The remaining time is calculated based on this progress and the print time.
