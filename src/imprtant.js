<select>
      {Array.from({ length: 20 }, (_, i) => i + 1).map
      ((num)=>(
        <option value={num} key={num}>{num}</option>

      )

      
)}
      </select>