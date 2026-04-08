(function() {
  'use strict';

  /* -------------------------------------------
     ACCORDION
     ------------------------------------------- */
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others (accordion behaviour)
      accordionItems.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          other.querySelector('.accordion-body').style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });

    // Keyboard: Enter / Space
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  /* -------------------------------------------
     WORKSHEET — MODE TOGGLE
     ------------------------------------------- */
  const modeButtons = document.querySelectorAll('.mode-toggle__btn');
  const simpleInputs = document.getElementById('simple-inputs');
  const refinedInputs = document.getElementById('refined-inputs');
  let currentMode = 'simple';

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      if (mode === currentMode) return;
      currentMode = mode;

      modeButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.mode === mode);
        b.setAttribute('aria-selected', b.dataset.mode === mode);
      });

      if (mode === 'simple') {
        simpleInputs.classList.remove('hidden');
        refinedInputs.classList.remove('visible');
      } else {
        simpleInputs.classList.add('hidden');
        refinedInputs.classList.add('visible');
        if (ageGroupRows.length === 0) addAgeGroupRow();
      }

      // Sync sessions value between modes
      const sessionsSimple = document.getElementById('sessions-simple');
      const sessionsRefined = document.getElementById('sessions-refined');
      if (mode === 'refined') {
        sessionsRefined.value = sessionsSimple.value;
      } else {
        sessionsSimple.value = sessionsRefined.value;
      }

      calculate();
    });
  });

  /* -------------------------------------------
     WORKSHEET — CALCULATION MODEL (declare first)
     ------------------------------------------- */

  // Fixed costs: [taskName, midYours, midMax]
  const FIXED_TASKS = [
    ['Building the evaluation session schedule', 8, 1],
    ['Post-evaluation director review sessions', 6, 1],
    ['Goalie evaluation coordination', 4.5, 1]
  ];

  // Variable costs: [taskName, rateYours (min/player), rateMax (min/player), perSession]
  // perSession: true means rate is per player per session; false means per player only
  const VARIABLE_TASKS = [
    ['Communicating ice times to players/parents', 15, 0, false],
    ['Assigning players to each evaluation session', 5, 0, true],
    ['Check-in management at the rink', 3, 0, true],
    ['Manual score entry', 4, 0, true],
    ['Auditing results and catching errors', 6.5, 0, false],
    ['Building level groupings from results', 5.5, 1, false],
    ['Producing and distributing player feedback/report cards', 10, 0, false]
  ];

  const resultsTbody = document.getElementById('results-tbody');
  const calloutYours = document.getElementById('callout-yours');
  const calloutSavedInline = document.getElementById('callout-saved-inline');
  const calloutDays = document.getElementById('callout-days');

  function getInputs() {
    let players, sessions;

    if (currentMode === 'simple') {
      players = parseInt(document.getElementById('total-players').value) || 0;
      sessions = parseInt(document.getElementById('sessions-simple').value) || 0;
    } else {
      players = ageGroupRows.reduce((sum, r) => sum + r.players, 0);
      sessions = parseInt(document.getElementById('sessions-refined').value) || 0;
    }

    return { players, sessions };
  }

  function calculate() {
    const { players, sessions } = getInputs();
    const hasData = players > 0 && sessions > 0;

    let html = '';
    let totalYours = 0;
    let totalMax = 0;

    // Fixed costs
    html += '<tr><td class="task-type-label" colspan="4">Fixed Costs</td></tr>';
    FIXED_TASKS.forEach(([name, yours, max]) => {
      const saved = yours - max;
      totalYours += yours;
      totalMax += max;
      html += taskRow(name, yours, max, saved, hasData, true);
    });

    // Variable costs
    html += '<tr><td class="task-type-label" colspan="4">Variable Costs</td></tr>';
    VARIABLE_TASKS.forEach(([name, rateYours, rateMax, perSession]) => {
      let yours, max;
      if (perSession) {
        yours = (rateYours * players * sessions) / 60;
        max = (rateMax * players * sessions) / 60;
      } else {
        yours = (rateYours * players) / 60;
        max = (rateMax * players) / 60;
      }
      const saved = yours - max;
      totalYours += yours;
      totalMax += max;
      html += taskRow(name, yours, max, saved, hasData, false);
    });

    // Total row
    const totalSaved = totalYours - totalMax;
    html += '<tr class="row-total">';
    html += '<td>Total</td>';
    html += '<td class="col-yours">' + (hasData ? Math.round(totalYours) + ' hrs' : '—') + '</td>';
    html += '<td class="col-max">' + (hasData ? Math.round(totalMax) + ' hrs' : '—') + '</td>';
    html += '<td class="col-saved">' + (hasData ? Math.round(totalSaved) + ' hrs' : '—') + '</td>';
    html += '</tr>';

    resultsTbody.innerHTML = html;

    // Callout boxes
    if (hasData) {
      calloutYours.textContent = Math.round(totalYours) + ' hrs';
      calloutSavedInline.textContent = Math.round(totalSaved) + ' hrs';
      calloutDays.textContent = Math.round(totalSaved / 8) + ' days';
    } else {
      calloutYours.textContent = '— hrs';
      calloutSavedInline.textContent = '—';
      calloutDays.textContent = '— days';
    }
  }

  function taskRow(name, yours, max, saved, hasData, isFixed) {
    if (!hasData && !isFixed) {
      return '<tr><td>' + name + '</td><td class="col-yours">—</td><td class="col-max">—</td><td class="col-saved">—</td></tr>';
    }
    return '<tr><td>' + name + '</td>' +
      '<td class="col-yours">' + Math.round(yours) + ' hrs</td>' +
      '<td class="col-max">' + Math.round(max) + ' hrs</td>' +
      '<td class="col-saved">' + Math.round(saved) + ' hrs</td></tr>';
  }

  /* -------------------------------------------
     WORKSHEET — AGE GROUP ROWS
     ------------------------------------------- */
  const AGE_GROUPS = ['U9','U10','U11','U12','U13','U14','U15','U16','U17','U18'];
  let ageGroupRows = [];
  let rowIdCounter = 0;

  const ageGroupTbody = document.getElementById('age-group-tbody');
  const btnAddRow = document.getElementById('btn-add-row');

  function getSelectedAgeGroups() {
    return ageGroupRows.map(r => r.ageGroup).filter(Boolean);
  }

  function updateDropdowns() {
    const selected = getSelectedAgeGroups();
    ageGroupRows.forEach(row => {
      const selectEl = document.getElementById('ag-select-' + row.id);
      if (!selectEl) return;
      Array.from(selectEl.options).forEach(opt => {
        if (opt.value === '') return;
        opt.disabled = selected.includes(opt.value) && opt.value !== row.ageGroup;
      });
    });
    updateRemoveButtons();
  }

  function updateRemoveButtons() {
    const btns = ageGroupTbody.querySelectorAll('.btn-remove-row');
    btns.forEach(btn => {
      btn.disabled = ageGroupRows.length <= 1;
    });
  }

  function addAgeGroupRow() {
    const id = rowIdCounter++;
    const rowData = { id, ageGroup: '', players: 0 };
    ageGroupRows.push(rowData);

    const tr = document.createElement('tr');
    tr.id = 'ag-row-' + id;

    const selected = getSelectedAgeGroups();
    let options = '<option value="">Select…</option>';
    AGE_GROUPS.forEach(ag => {
      const dis = selected.includes(ag) ? ' disabled' : '';
      options += '<option value="' + ag + '"' + dis + '>' + ag + '</option>';
    });

    tr.innerHTML =
      '<td><select id="ag-select-' + id + '" aria-label="Age group">' + options + '</select></td>' +
      '<td><input type="number" id="ag-players-' + id + '" min="1" placeholder="0" aria-label="Number of players"></td>' +
      '<td><button type="button" class="btn-remove-row" data-id="' + id + '" aria-label="Remove row">&times;</button></td>';

    ageGroupTbody.appendChild(tr);

    // Events
    tr.querySelector('select').addEventListener('change', function() {
      rowData.ageGroup = this.value;
      updateDropdowns();
      calculate();
    });

    tr.querySelector('input').addEventListener('input', function() {
      rowData.players = parseInt(this.value) || 0;
      calculate();
    });

    tr.querySelector('.btn-remove-row').addEventListener('click', function() {
      removeAgeGroupRow(id);
    });

    updateDropdowns();
    calculate();
  }

  function removeAgeGroupRow(id) {
    if (ageGroupRows.length <= 1) return;
    ageGroupRows = ageGroupRows.filter(r => r.id !== id);
    const tr = document.getElementById('ag-row-' + id);
    if (tr) tr.remove();
    updateDropdowns();
    calculate();
  }

  btnAddRow.addEventListener('click', addAgeGroupRow);

  /* -------------------------------------------
     WORKSHEET — INIT & EVENT BINDING
     ------------------------------------------- */

  // Use event delegation on parent container — catches all input/change
  // events from any form control (simple inputs, refined inputs, age-group rows)
  var worksheetControls = document.querySelector('.worksheet-controls');
  worksheetControls.addEventListener('input', function() { calculate(); });
  worksheetControls.addEventListener('change', function() { calculate(); });

  // Init one refined-mode row and run initial calculation
  addAgeGroupRow();
  calculate();

})();
